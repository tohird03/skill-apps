import React from 'react'
import ProductCard from '../../Components/Card/Card'
import MiniDrawer from '../../Components/Sidebar/Sidebar'
import { useFetchdata } from '../../Hook/useFetch'
import { MyComponentProps } from '../../Interface/props.interface'
import { ProductBox } from './style'

interface ItemProps {
  name: string;
  price: number;
}

export default function Home() {
  const { data } = useFetchdata("/products")

  return (
    <MiniDrawer>
      <ProductBox>
        {
          data.length > 0 ? data.map((el: any) => {
            return <ProductCard title={el.title}/>
          }) : "PRODUCT NOT FOUND"
        }
      </ProductBox>
    </MiniDrawer>
  )
}
