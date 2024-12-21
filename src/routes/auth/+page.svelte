<script lang="ts">
	import type { ActionData } from './$types';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

	export let form: ActionData;

	const toastStore = getToastStore();
	let passwordVisibility = false;

	if (form?.success === false) {
		toastStore.trigger({
			message: `Failed. ${form?.reason}`,
			timeout: 3000,
			background: 'variant-filled-error'
		});
	}
	if (form?.success === true) {
		toastStore.trigger({
			message: `${form?.reason ?? 'Success!'}`,
			timeout: 3000,
			background: 'variant-filled-success'
		});
	}

	let tabSet: number = 0;
</script>

<div class="h-screen flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md">
	<div class="input-group-shim shadow rounded-lg">
		<div class="flex flex-col w-full items-center space-y-4">
			<TabGroup justify="justify-center">
				<Tab bind:group={tabSet} name="Login" value={0}>Login</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<form class="select w-full" method="post" action="?/login" autocomplete="off">
						<label class="label block">
							<span>Email</span>
							<input
								class="input w-full rounded-lg variant-filled-secondary"
								type="text"
								id="email"
								name="email"
							/>
						</label>
						<label class="label block">
							<span>Password</span>
							<span class="flex w-full items-center gap-2">
								<input
									required
									class="input w-full rounded-lg variant-filled-secondary"
									type={passwordVisibility ? 'text' : 'password'}
									id="password"
									name="password"
								/>
								<input
									type="checkbox"
									name="passwordVisibility"
									id="passwordVisibility"
									bind:checked={passwordVisibility}
									class="hidden"
								/>
								<label for="passwordVisibility" class="cursor-pointer">
									{#if passwordVisibility}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											class="fill-secondary-400"
										>
											<path
												d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
											>
											</path>
										</svg>
									{:else}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											class="fill-secondary-400"
										>
											<path
												d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
											>
											</path>
										</svg>
									{/if}
								</label>
							</span>
						</label>
						<span class="w-full flex justify-center">
							{#if tabSet === 0}
								<button class="btn w-fit rounded-lg variant-outline-secondary">Log in</button>
							{/if}
						</span>
					</form>
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
