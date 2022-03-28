<template>
  <el-space :size="50" wrap>
    <el-card style="width: 500px">
      <div class="space-y-20">
        <div class="p-12 bg-white shadow rounded-lg">
          <h3 class="text-14 border-b">font-sans</h3>
          <p class="font-sans">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="p-12 bg-white shadow rounded-lg">
          <h3 class="text-14 border-b">font-serif</h3>
          <p class="font-serif">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="p-12 bg-white shadow rounded-lg">
          <h3 class="text-14 border-b">font-mono</h3>
          <p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>
    </el-card>
    <el-card style="width: 500px">
      <div class="grid grid-cols-10 gap-12 my-10">
        <div class="bg-sky-50 aspect-square"></div>
        <div class="bg-sky-100 aspect-square"></div>
        <div class="bg-sky-200 aspect-square"></div>
        <div class="bg-sky-300 aspect-square"></div>
        <div class="bg-sky-400 aspect-square"></div>
        <div class="bg-sky-500 aspect-square"></div>
        <div class="bg-sky-600 aspect-square"></div>
        <div class="bg-sky-700 aspect-square"></div>
        <div class="bg-sky-800 aspect-square"></div>
        <div class="bg-sky-900 aspect-square"></div>
      </div>
      <div class="text-12 flex justify-between text-zinc-600 mb-10">
        <span>sky-50</span>
        <span>...</span>
        <span>sky-900</span>
      </div>
      <div class="grid grid-cols-10 gap-12 my-10">
        <div class="bg-blue-50 aspect-square"></div>
        <div class="bg-blue-100 aspect-square"></div>
        <div class="bg-blue-200 aspect-square"></div>
        <div class="bg-blue-300 aspect-square"></div>
        <div class="bg-blue-400 aspect-square"></div>
        <div class="bg-blue-500 aspect-square"></div>
        <div class="bg-blue-600 aspect-square"></div>
        <div class="bg-blue-700 aspect-square"></div>
        <div class="bg-blue-800 aspect-square"></div>
        <div class="bg-blue-900 aspect-square"></div>
      </div>
      <div class="text-12 flex justify-between text-zinc-600 mb-10">
        <span>blue-50</span>
        <span>...</span>
        <span>blue-900</span>
      </div>
      <div class="grid grid-cols-10 gap-12 my-10">
        <div class="bg-indigo-50 aspect-square"></div>
        <div class="bg-indigo-100 aspect-square"></div>
        <div class="bg-indigo-200 aspect-square"></div>
        <div class="bg-indigo-300 aspect-square"></div>
        <div class="bg-indigo-400 aspect-square"></div>
        <div class="bg-indigo-500 aspect-square"></div>
        <div class="bg-indigo-600 aspect-square"></div>
        <div class="bg-indigo-700 aspect-square"></div>
        <div class="bg-indigo-800 aspect-square"></div>
        <div class="bg-indigo-900 aspect-square"></div>
      </div>
      <div class="text-12 flex justify-between text-zinc-600 mb-10">
        <span>indigo-50</span>
        <span>...</span>
        <span>indigo-900</span>
      </div>
      <div class="grid grid-cols-10 gap-12 my-10">
        <div class="bg-violet-50 aspect-square"></div>
        <div class="bg-violet-100 aspect-square"></div>
        <div class="bg-violet-200 aspect-square"></div>
        <div class="bg-violet-300 aspect-square"></div>
        <div class="bg-violet-400 aspect-square"></div>
        <div class="bg-violet-500 aspect-square"></div>
        <div class="bg-violet-600 aspect-square"></div>
        <div class="bg-violet-700 aspect-square"></div>
        <div class="bg-violet-800 aspect-square"></div>
        <div class="bg-violet-900 aspect-square"></div>
      </div>
      <div class="text-12 flex justify-between text-zinc-600 mb-10">
        <span>violet-50</span>
        <span>...</span>
        <span>violet-900</span>
      </div>
    </el-card>
    <el-card style="width: 700px">
      <div class="flex font-sans">
        <div class="flex-none w-200 relative">
          <img src="@/assets/pic1.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <form class="flex-auto p-24">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">Classic Utility Jacket</h1>
            <div class="text-lg font-semibold text-slate-500">$110.00</div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-8">In stock</div>
          </div>
          <div class="flex items-baseline mt-24 mb-24 pb-24 border-b border-slate-200">
            <div class="space-x-8 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div
                  class="w-36 h-36 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                >
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div
                  class="w-36 h-36 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                >
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div
                  class="w-36 h-36 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                >
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div
                  class="w-36 h-36 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                >
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div
                  class="w-36 h-36 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                >
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-16 mb-24 text-sm font-medium">
            <div class="flex-auto flex space-x-16">
              <button class="h-40 px-24 font-semibold rounded-md bg-black text-white" type="submit">Buy now</button>
              <button class="h-40 px-24 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">Add to bag</button>
            </div>
            <button
              class="flex-none flex items-center justify-center w-36 h-36 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-700">Free shipping on all continental US orders.</p>
        </form>
      </div>
    </el-card>
    <el-card>
      <div class="flex font-sans">
        <div class="flex-none w-200 relative">
          <img src="@/assets/kids.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div>
        <form class="flex-auto p-24">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
            <div class="w-full flex-none mt-8 order-1 text-3xl font-bold text-violet-600">$39.00</div>
            <div class="text-sm font-medium text-slate-400">In stock</div>
          </div>
          <div class="flex items-baseline mt-24 mb-24 pb-24 border-b border-slate-200">
            <div class="space-x-8 flex text-sm font-bold">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div
                  class="w-36 h-36 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
                >
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div
                  class="w-36 h-36 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
                >
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div
                  class="w-36 h-36 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
                >
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div
                  class="w-36 h-36 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
                >
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div
                  class="w-36 h-36 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white"
                >
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-16 mb-20 text-sm font-medium">
            <div class="flex-auto flex space-x-16">
              <button class="h-40 px-24 font-semibold rounded-full bg-violet-600 text-white" type="submit">Buy now</button>
              <button class="h-40 px-24 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">Add to bag</button>
            </div>
            <button
              class="flex-none flex items-center justify-center w-36 h-36 rounded-full text-violet-600 bg-violet-50"
              type="button"
              aria-label="Like"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">Free shipping on all continental US orders.</p>
        </form>
      </div>
    </el-card>
  </el-space>
</template>

<script>
export default {}
</script>
<style>
.el-input__suffix-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
}

.user-title {
  margin-bottom: 10px;
  padding-left: 30px;
  color: #fff;
  text-align: left;
}
</style>
