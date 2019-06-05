/** Callback to inform of a value updates. */
declare type Subscriber<T> = (value: T) => void;
/** Unsubscribes from value updates. */
declare type Unsubscriber = () => void;
/** Callback to update a value. */
declare type Updater<T> = (value: T) => T;
/** Cleanup logic callback. */
declare type Invalidater<T> = (value?: T) => void;
/** Start and stop notification callbacks. */
declare type StartStopNotifier<T> = (set: Subscriber<T>) => Unsubscriber | void;
/** Readable interface for subscribing. */
export interface Readable<T> {
  /**
   * Subscribe on value changes.
   * @param run subscription callback
   * @param invalidate cleanup callback
   */
  subscribe(run: Subscriber<T>, invalidate?: Invalidater<T>): Unsubscriber;
}
/** Writable interface for both updating and subscribing. */
export declare interface Writable<T> extends Readable<T> {
  /**
   * Set value and inform subscribers.
   * @param value to set
   */
  set(value: T): void;
  /**
   * Update value using callback and inform subscribers.
   * @param updater callback
   */
  update(updater: Updater<T>): void;
}
