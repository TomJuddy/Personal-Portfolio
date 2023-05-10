
import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import Link from "next/link";
import MyPhoto from 'file:///C:/Users/Tom/Desktop/PicOfMe.jpeg';
import TextAnimation from '../../components/TextAnimation';


export default function Home(){
  return(
    <div>
    <Head>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <main className='max-h-screenr'>
      <div className='flex h-screen items-center justify-evenly '>
        <div class="p-3">
          <Image src={MyPhoto} class="shadow-lg rounded max-w-full h-auto align-middle border-none object-cover h-1279 w-96" /> 
        </div> 
        <div className='p-6 rounded-lg bg-opacity-10 shadow-lg rounded'>
          <TextAnimation className='text-7xl text-white font-bold' text="Hi I'm Tom." />
          <TextAnimation className='text-4xl text-center' text="Im a junior developer currently in college." />
        </div>
      </div>
      <div className='flex h-screen items-center justify-evenly '>
        
      </div>
      
        
    </main>
    </div>
    
  )
}
