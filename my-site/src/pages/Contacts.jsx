import Head from 'next/head';
import { TypewriterClass } from 'typewriter-effect';
import Image from 'next/image'
import MyPhoto from 'file:///C:/Users/Tom/Desktop/Git.png';
import MyPhoto2 from 'file:///C:/Users/Tom/Desktop/Linked.png';
import MyPhoto3 from 'file:///C:/Users/Tom/Desktop/Twitter.png';
import Link from "next/link";
import TextAnimation from '../../components/TextAnimation';

export default function Contacts(){
    return(
      <div>
      <Head>
      <meta name="description" content="Generated by create next app" />
      </Head>
     <main className='min-h-screenr justify-center'>
      <div className='flex h-96 items-center justify-center pt-56'>
        <div className='p-6'>
          <TextAnimation className='text-7xl text-white font-bold' text="Contacts and Socials" />
        </div>
      </div>
      <div className='flex items-center justify-evenly p-10'>
  <div className='flex flex-col items-center'>
    <Link href='https://github.com/TomJuddy'><Image src={MyPhoto} class="max-w-full h-auto align-middle border-none object-cover h-64 w-64"></Image></Link>
    <p className='text-2xl'>Git</p>
  </div>
  <div className='flex flex-col items-center'>
    <Link href='https://www.linkedin.com/in/thomas-judd-52089a270/'><Image src={MyPhoto2} class="max-w-full h-auto align-middle border-none object-cover h-64 w-64"></Image></Link>
    <p className='text-2xl'>LinkedIn</p>
  </div>
  <div className='flex flex-col items-center'>
    <Link href='https://twitter.com/RealThomasJudd'><Image src={MyPhoto3} class="max-w-full h-auto align-middle border-none object-cover h-64 w-64"></Image></Link>
    <p className='text-2xl'>Twitter</p>
  </div>
</div>
       <div className='flex text-7xl text-white font-bold justify-center'>Email Me At</div>
      <div className='flex h-96 items-center justify-evenly pb-32'>
       
        <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=thomas@judd.co.uk&su=Write Subject Here&body=Write Here&bcc=juddthomas3@gmail.com'>
          <div className='text-5xl text-white font-bold'>thomas@judd.co.uk</div>
        </Link>
      </div>
     </main>
      </div>

)
}