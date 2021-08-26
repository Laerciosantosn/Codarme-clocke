import { useFormik } from 'formik';
import * as yup from 'yup';
import firebase from './../config/firebase'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react'

import { Logo } from './../components'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Mandatory filling'),
  password: yup.string().required('Mandatory filling'),
  username: yup.string().required('Mandatory filling')
})

export default function Home() {
  const { values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting
  } = useFormik({
    onSubmit: (values, form) => {
      console.log(values);
    },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  })

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>
          Crie sua agenda compartilhada
        </Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>


        <FormControl id="username" p={4} isRequired>
          <InputGroup size="lg">
            <InputLeftAddon children="clocker.work" />
            <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
          </InputGroup>
          {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
        </FormControl>


        <Box p={4}>
          <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Enter</Button>
        </Box>

      </Box>
    </Container>
  )
}
