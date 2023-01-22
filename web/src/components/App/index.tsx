import React, { useState } from 'react';
import { Button, Container, Fieldset, Form, Input, InputBox, Label, Menu, Title, Divider, Text, ErrorArea, Modal, ModalArea } from './styles';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/password.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fetchNui } from '../../utils/fetchNui';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { useVisibility } from '../../providers/VisibilityProvider';
import { debugData } from '../../utils/debugData';
import { FieldError } from 'react-hook-form/dist/types';
import { motion, AnimatePresence } from 'framer-motion';

interface Data {
  email: string
  password: string
}

interface Modal {
  opened: boolean
  message: string
}

const schema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('O campo de e-mail é obrigatório'),
  password: yup.string().required('O campo de senha é obrigatório')
})

debugData([
  {
    action: 'open',
    data: true
  }
])

const App: React.FC = () => {
  const { visible, setVisible } = useVisibility();
  const [modal, setModal] = useState<Modal>();

  useNuiEvent('open', () => {
    setVisible(true);
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Data>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Data) => {
    const res = await fetchNui<{ status: boolean, message: string }>('backend', { action: 'signIn', args: { ...data } }, {
      status: false,
      message: "Email inválido"
    });
    if (res) {
      setModal({
        message: res.message,
        opened: true
      })

      setTimeout(() => {
        if(res.status){
          setVisible(false);
          fetchNui('close');
          return
        }

        setModal({} as any);
      }, 2500);
    }
  }

  return (
    <>
      <AnimatePresence>
        {visible && (
          <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
            <Menu>
              <Title>LOGIN</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {Object.values(errors)[0] && (
                  <ErrorArea>
                    {Object.values(errors).map((v: FieldError, k: number) => (
                      <p>{v.message}</p>
                    ))}
                  </ErrorArea>
                )}
                <Fieldset>
                  <Label>Email</Label>
                  <InputBox>
                    <img src={EmailIcon} />
                    <Input type="text" placeholder='johndoe@email.com' {...register('email')} autoComplete="off" />
                  </InputBox>
                </Fieldset>
                <Fieldset>
                  <Label>Senha</Label>
                  <InputBox>
                    <img src={PasswordIcon} />
                    <Input type="password" placeholder='123456' {...register('password')} autoComplete="off" />
                  </InputBox>
                </Fieldset>
                <Button type="submit">Entrar</Button>
              </Form>
              <Divider />
              <Text>Precisa de uma conta? <span>Cadastrar-se</span></Text>
            </Menu>
            {modal?.opened && (
              <ModalArea>
                <Modal>
                  <p>{modal.message}</p>
                </Modal>
              </ModalArea>
            )}
          </Container>
        )}
      </AnimatePresence>
    </>
  )
}

export default App;
