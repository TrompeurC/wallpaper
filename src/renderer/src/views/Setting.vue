<script setup lang="ts">
import { CreditCardTwoTone } from '@ant-design/icons-vue'
import { useConfig } from '@renderer/store/useConfig';

const { config } = useConfig()


const handleSetSaveDirectory = async () => {
  const res = await window.api.setSaveDirectory()
  if (res) {
    config.saveDirectory = res;
  }
}

</script>

<template>
  <main class="flex  w-full h-full">
    <div class="flex gap-1 flex-col flex-1">
      <p class="text-center mt-4 text-gray-600"> 参数设置</p>
      <!-- <a-input v-model:value="config.saveDirectory" placeholder="请选择保存路径！" />-->
      <div class="flex justify-center w-full px-6">
        <a-input-group compact class="">
          <a-input placeholder="请选择保存的文件夹路径" v-model:value="config.saveDirectory" readonly
            style="width: calc(100% - 32px)" />
          <a-tooltip title="请选择保存的文件夹">
            <a-button>
              <template #icon>
                <CreditCardTwoTone @click="handleSetSaveDirectory" />
              </template>
            </a-button>
          </a-tooltip>
        </a-input-group>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
