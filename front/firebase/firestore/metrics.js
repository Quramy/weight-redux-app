/* @flow */

import type { Collection } from 'firebase';
import firebase from 'firebase/app';

export type Metrics = {
  id: string;
  value: number;
  type: string;
  date: string;
  uid: string;
};

export type AddMetricBody = $Diff<Metrics, { id: string }>;

export function addMetric(body: AddMetricBody) {
  const collection: Collection<Metrics> = firebase.firestore().collection('metrics');
  return collection.add(body).then(docRef => ({
    ...body,
    id: docRef.id,
  }));
}
