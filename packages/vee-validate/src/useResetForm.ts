import { FormContextKey } from './symbols';
import { FormState } from './types';
import { injectWithSelf, warn } from './utils';

export function useResetForm<TValues extends Record<string, unknown> = Record<string, unknown>>() {
  const form = injectWithSelf(FormContextKey);
  if (!form) {
    warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
  }

  return function resetForm(state?: Partial<FormState<TValues>>) {
    if (!form) {
      return;
    }

    return form.resetForm(state);
  };
}
