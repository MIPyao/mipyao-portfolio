<template>
	<UContainer class="my-10">
		<h1 class="text-center font-bold text-3xl my-10">
			{{ $t('contactInfo') }}
		</h1>

		<UCard class="rounded-3xl my-6">
			<section class="flex items-center m-5">
				<ico-phone class="text-3xl mr-3" />
				<p></p>
			</section>

			<section class="flex items-center m-5">
				<ico-email class="text-3xl mr-3" />
				<p>835701874@qq.com</p>
			</section>

			<section class="flex items-center m-5">
				<ico-address class="text-3xl mr-3" />
				<p>北京市 朝阳区</p>
			</section>
		</UCard>

		<UCard class="rounded-3xl my-6">
			<div class="flex justify-center items-center space-x-3">
				<NuxtLink to="https://github.com/MIPyao" target="_blank">
					<ico-github class="text-3xl rounded-full" aria-label="Go to MIPyao's Github Profile" />
				</NuxtLink>

				<NuxtLink to="https://space.bilibili.com/6112497" target="_blank">
					<ico-bilibili class="text-3xl rounded-full" aria-label="Go to MIPyao's Bilibili Profile" />
				</NuxtLink>
			</div>
		</UCard>
	</UContainer>
</template>
