import React from 'react'
import Slider from './carousel/components';
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../services/firebaseConfigs/firebase'
import { useEffect, useState } from 'react'
import { mockedSlides } from './carousel/utils/mockedSlides';

export default function Home() { 
 console.log(mockedSlides)
  return (
    <div>

<Slider />
        
    </div>
  )
}
