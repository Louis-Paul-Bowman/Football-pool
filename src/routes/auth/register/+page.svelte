<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { invalidate } from '$app/navigation';

	const toastStore = getToastStore();

	let displayName: string = '';
	let password: string = '';
	let confirm: string = '';

	async function register() {
		if (password !== confirm) {
			toastStore.trigger({
				message: 'Password and confirmation do not match.',
				timeout: 10000,
				background: 'variant-filled-error'
			});
			return;
		}

		const resp = await fetch('/auth/register', {
			method: 'POST',
			body: JSON.stringify({ password, displayName })
		});
		if (!resp.ok) {
			toastStore.trigger({
				message: `Failed. ${await resp.text()}`,
				timeout: 10000,
				background: 'variant-filled-error'
			});
			return;
		}
		toastStore.trigger({
			message: 'Credentials updated. Please re-login.',
			timeout: 6000,
			background: 'variant-filled-success'
		});

		// Invalidate the session data to force a reload
		await invalidate('supabase:auth');

		await goto('/auth');
	}
</script>

<div class="h-screen flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md">
	<div class="input-group-shim shadow rounded-lg">
		<div class="flex flex-col w-full items-center space-y-4">
			<p>Register</p>
			<div class="select w-full">
				<label class="label block">
					<span>Display name</span>
					<input
						bind:value={displayName}
						class="input w-full rounded-lg variant-filled-secondary"
						type="text"
						id="displayName"
						name="displayName"
					/>
				</label>
				<label class="label block">
					<span>Password</span>
					<span class="flex w-full items-center gap-2">
						<input
							bind:value={password}
							required
							class="input w-full rounded-lg variant-filled-secondary"
							type="password"
							id="password"
							name="password"
						/>
					</span>
					<span>Confirm password</span>
					<span class="flex w-full items-center gap-2">
						<input
							bind:value={confirm}
							required
							class="input w-full rounded-lg variant-filled-secondary"
							type="password"
							id="password"
							name="password"
						/>
					</span>
					<span class="w-full flex justify-center">
						<button on:click={register} class="btn w-fit rounded-lg variant-outline-secondary"
							>Set password</button
						>
					</span>
				</label>
			</div>
		</div>
	</div>
</div>
