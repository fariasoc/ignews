import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
) {

  // Buscar o usuário no banco do FaunaDB
  // Salvar os dados da subscription no FaunaDB

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_costumer_id'),
          customerId
        )
      )
    )
  )

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  await fauna.query(
    q.Create(
      q.Collection('subscriptions'),
      {data: subscription}
      )
  )

}