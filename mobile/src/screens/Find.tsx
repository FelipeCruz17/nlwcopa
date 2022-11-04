import { useState } from 'react'
import { api } from '../services/api'
import { VStack, Heading, useToast } from 'native-base'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export function Find() {
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState('');

  const toast = useToast()
  const { navigate } = useNavigation();

  async function handleJoinPoll() {
    try {
      setIsLoading(true)

      if (!code.trim()) {
        toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      await api.post('/polls/join', { code })

      toast.show({
        title: 'Você no bolão com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      })

      navigate('polls');

    } catch (error) {
      console.log(error)
      setIsLoading(false);

      if (error.response?.data?.message === 'Poll not found') {
        toast.show({
          title: 'Bolão não encontrado',
          placement: 'top',
          bgColor: 'red.500'
        })

        return
      }

      if (error.response?.data?.message === 'You already joined this poll') {
        toast.show({
          title: 'Você já está neste bolão',
          placement: 'top',
          bgColor: 'red.500'
        })

        return
      }
    }
  }
  
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Buscar por código' showBackButton />

      <VStack mt={8} mx={5} alignItems='center'>
        <Heading fontFamily='heading' color='white' fontSize='xl' mb={8} textAlign='center'>
          Encontre um bolão através de seu código único
        </Heading>

        <Input
          mb={2}
          placeholder='Qual o código do bolão?'
          autoCapitalize='characters'
          onChangeText={setCode}
        />

        <Button title='BUSCAR BOLÃO' isLoading={isLoading} onPress={handleJoinPoll} />
      </VStack>

    </VStack>
  )
}