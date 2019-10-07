import React, { useState } from 'react'
import { Button, TextInput, HelperText } from 'react-native-paper'
import { Container } from 'components'
import useForm from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { SocialIcon } from 'react-native-elements'

type FormData = {
  email: string
  password: string
}
interface IProps {
  loading?: boolean
  onSubmit: (form: FormData) => void
  onFacebook: () => void
}

export const AuthForm: React.FC<IProps> = ({
  onSubmit,
  onFacebook,
  loading
}) => {
  const { t } = useTranslation()
  const [Form, setForm] = useState({
    email: '',
    password: ''
  })

  const { register, handleSubmit, errors, setValue } = useForm<FormData>()

  const submit: any = handleSubmit((form: FormData) => {
    onSubmit(form)
  })

  const inputChange = (field: any) => (value: string) => {
    setForm({
      ...Form,
      [field]: value
    })
    setValue(field, value, true)
  }

  return (
    <Container>
      <TextInput
        //@ts-ignore
        ref={register(
          { name: 'email' },
          {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            },
            required: true
          }
        )}
        mode="outlined"
        label={t('form.email')}
        disabled={loading}
        value={Form.email}
        error={!!errors.email}
        onChangeText={inputChange('email')}
      />
      <HelperText type="error" visible={!!errors.email}>
        {t('form.emailRequired')}
      </HelperText>

      <TextInput
        //@ts-ignore
        ref={register(
          { name: 'password' },
          {
            minLength: 5,
            required: true
          }
        )}
        mode="outlined"
        label={t('form.password')}
        value={Form.password}
        disabled={loading}
        error={!!errors.password}
        onChangeText={inputChange('password')}
      />
      <HelperText type="error" visible={!!errors.password}>
        {t('form.required')}
      </HelperText>

      <Button
        mode="contained"
        disabled={loading}
        loading={loading}
        onPress={submit}
      >
        {t('form.submit')}
      </Button>

      <SocialIcon
        disabled={loading}
        button
        title={t('form.facebook')}
        type="facebook"
        onPress={() => onFacebook()}
      />
    </Container>
  )
}
