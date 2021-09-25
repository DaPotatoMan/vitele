type App = import('vue').App;
type Ref<T> = import('vue').Ref<T>;
type PropType<T> = import('vue').PropType<T>;

declare const inject: (key: string | InjectionKey<T>) => T;

declare module '*.vue' {
   import type { DefineComponent } from 'vue';

   const component: DefineComponent<
   Record<string, unknown>,
   Record<string, unknown>,
   unknown
   >;
   export default component;
}
