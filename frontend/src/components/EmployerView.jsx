import { css } from '@emotion/core'
import DynamicForm from './DynamicForm'
import { employeeOnboardingFormSchema } from '../schemas/employer-form-schema'

export const EmployerView = () => {
  return (
    <div className=''>
      <DynamicForm onSubmit={() => { }} schema={employeeOnboardingFormSchema} />
    </div>
  )
}
