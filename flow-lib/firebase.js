/* eslint-disable */

type User = {
  displayName: ?string;
  email: ?string;
  uid: string;
  providerId: string;
};

declare class FBAuth {
  currentUser: ?User;
  onAuthStateChanged(cb: (user?: string) => void): void;
}

declare class DocRef<T> {
  id: string;
}

declare class Collection<T> {
  add(body: $Diff<T, { id: string }>): Promise<DocRef<T>>;
}

declare class Firestore {
  collection<T>(name: string): Collection<T>;
}

declare class FirebaseApp {
  auth(): FBAuth;
  firestore(): Firestore;
}

declare module 'firebase' {
  declare export type Collection<T> = Collection<T>;
  declare export type User = User;
}

declare module 'firebase/app' {
  declare export default FirebaseApp;
}
