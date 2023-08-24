import Image from 'next/image'
import { Inter, Merriweather } from 'next/font/google'
import { Box } from '@/components/Box'
import { WhatsappLogo, FolderSimple, GitBranch, GithubLogo, NavigationArrow, Star, Circle } from 'phosphor-react'
import { useState, useEffect } from 'react'

const axios = require('axios')


const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  const api = "https://api.github.com/users/wagnervital"

  const [user, setUser] = useState({
    name: '',
    avatar: '',
    github: '',
  })

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          github: data.html_url,
        })
      })
  }, [])


  return (
    <div className='bg-slate-800 text-slate-400 p-6 justify-center md:grid  xl:grid-cols-[21.75rem_1fr] gap-6 min-h-screen'>
      <aside>
        <Box>
          <div className='flex justify-center'>
            <img src={user.avatar} alt="" className='w-32 h-32 mb-4 mt-2 border-2 border-green-500 rounded-full' />
          </div>
          <h2 className='text-center font-bold'>
            {user.name}
          </h2>
          <p className='text-center mb-2'>
            Estudante
          </p>
        </Box>
        <Box>
          <ul className='pl-4 pt-2 pb-2'>
            <li className='flex pb-4'>
              <NavigationArrow className='text-2xl' />
              <p className='pl-2'>
                Brasil
              </p>
            </li>
            <li className='flex pb-4'>
              <a href="https://wa.me/5513997681868" target="_blank" rel="noopener noreferrer" className='flex'>
                <WhatsappLogo className='text-2xl text-green-500' />
                <p className='pl-2'>
                  WhatsApp
                </p>
              </a>
            </li>
            <li className='flex'>
              <GithubLogo className='text-2xl' />
              <a href={user.github} target='_blank' className='pl-2'>
                Github
              </a>
            </li>
          </ul>
        </Box>
        <Box>
          <h2 className='text-xl mb-7 pl-2 font-bold'>Tecnologias</h2>
          <ul className='block md:flex justify-around mb-2'>
            <li className='text-center text-black bg-rose-300 rounded-3xl py-1 px-4'>ReactJS</li>
            <li className='text-center text-black bg-rose-300 rounded-3xl py-1 px-4 my-4 md:my-0'>JavaScript</li>
            <li className='text-center  text-black bg-rose-300 rounded-3xl py-1 px-4'>NodeJS</li>
          </ul>
        </Box>
        <Box>
          <h2 className='text-xl mb-7 pl-2 font-bold'>Educação</h2>
          <ul className='list-disc pl-6'>
            <li className='mb-2'>
              <p className='font-bold'>
                Meu Curso em vídeo
              </p>
              <p>
                12/22 - 23
              </p>

            </li>
            <li className='mb-2'>
              <p className='font-bold'>
                Rocketseat
              </p>
              <p>
                2/23
              </p>
            </li>
          </ul>
        </Box>
      </aside>
      <main>
        <Box className='block sm:flex justify-between'>
          <p className='font-bold m-2'>
            My projects
          </p>
          <a href='#' className='m-2'>
            Veja Todos
          </a>
        </Box>
        <div className=' block xl:flex gap-4'>
          <Box>
            <div>
              <a href="https://wagnervital.github.io/projeto-social-tree/" target='_blank'>
                <div className='flex mt-2 ml-4 mb-4'>
                  <FolderSimple className='text-xl' />
                  <p className='font-bold ml-2'>Projeto Social Tree</p>
                </div>
                <p className='ml-4'>
                  Um projeto feito no começo dos meus estudos nas aulas da Rocketseat
                </p>
              </a>
              <div className='block sm:flex justify-between mt-4'>
                <div className='flex ml-4 '>
                  <a href="#">
                    <Star className='mt-1' />
                  </a>
                  <p>100</p>
                  <a href="#">
                    <GitBranch className='ml-4 mt-1' />
                  </a>
                  <p>100</p>
                </div>
                <div className='flex'>
                  <Circle size={17} weight='fill' className=' bg-gray-500 text-yellow-400 rounded-full mt-1' />
                  JavaScript
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              <a href="#">
                <div className='flex mt-2 ml-4 mb-4'>
                  <FolderSimple className='text-xl' />
                  <p className='font-bold ml-2'>My-Onyx</p>
                </div>
                <p className='ml-4'>
                  Consulte os códigos de erro que aparecem no painel do veículo onix
                </p>
              </a>
              <div className='block sm:flex justify-between mt-4'>
              <div className='flex ml-4 '>
                  <a href="#">
                    <Star className='mt-1' />
                  </a>
                  <p>100</p>
                  <a href="#">
                    <GitBranch className='ml-4 mt-1' />
                  </a>
                  <p>100</p>
                </div>
                <div className='flex'>
                  <Circle size={17} weight='fill' className=' bg-gray-500 text-yellow-400 rounded-full mt-1' />
                  JavaScript
                </div>
              </div>
            </div>
          </Box>
        </div>
        <a href="#">
          <Box>
            <p className='font-bold m-2'>
              Recent Post
            </p>
          </Box>
        </a>
        <Box className='block md:flex'>
          <div className='flex justify-center'>
            <img src={user.avatar} alt="" className='w-32 h-32 mb-4 mt-4 ml-4 border-2 rounded-full items-center' />
          </div>
          <div className=''>
            <p className='font-bold mt-4 ml-4'>
              Erro adb devices no Genymotion e Android Studio (React Native)
            </p>
            <p className='ml-5'>
              2 anos atrás
            </p>
            <p className='ml-4 mt-6'>
              Erro adb devices no Genymotion e Android Studio (React Native)
            </p>
            <div className='block md:flex mt-2'>
              <p className='ml-4'>
                #react-native
              </p>
              <p className='ml-4'>
                #genimotion
              </p>
            </div>
          </div>
        </Box>
      </main>
    </div>
  )
}
