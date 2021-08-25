import { Subscription } from "rxjs";

export class SubscriptionBin {

	private _subscription: Subscription[] = [];

	set add(subscription: Subscription | Subscription[]) {
		if (Array.isArray(subscription)) this._subscription.concat(subscription);
		else this._subscription.push(subscription);
	}

	clearAll = () => this._subscription.forEach(s => s.unsubscribe());
}
