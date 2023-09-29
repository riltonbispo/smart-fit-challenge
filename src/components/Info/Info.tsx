import { Container } from '@/styles/utils'
import React from 'react'
import Image from 'next/image'
import { infoData } from '@/data/InfoData'
import { Content } from './style'

const Info = () => {
  return (
    <Container>
      <Content>
        {infoData.map((infoItem, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="font-bold">{infoItem.title}</span>
            <div className="flex gap-4 items-center">
              {infoItem.items.map((item, subIndex) => (
                <div className="flex flex-col items-center" key={subIndex}>
                  <Image src={item.image} alt="" height={50}></Image>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Content>
    </Container>
  )
}

export default Info
