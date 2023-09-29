'use client'

import { useGyms } from '@/contexts/GymContext'
import { Container } from '@/styles/utils'
import React from 'react'
import * as C from './style'

import * as ImageInfo from '@/data/InfoData'
import Image from 'next/image'

const Card = () => {
  const gContext = useGyms()

  return (
    <Container>
      <C.CardGrid>
        {gContext?.gyms.map((gym) => (
          <C.Card key={gym.id} $status={gym.opened}>
            <span className="status">{gym.opened ? 'aberto' : 'fechado'}</span>
            <h4>{gym.title}</h4>
            <div
              dangerouslySetInnerHTML={{ __html: gym.content }}
              className="address"
            />
            {gym.opened && (
              <>
                <div className="flex items-center justify-between mt-4 border-t border-zinc-400 pt-3">
                  {gym.mask === 'required' && (
                    <Image src={ImageInfo.maskRequired} alt="" height={60} />
                  )}
                  {gym.mask === 'recommended' && (
                    <Image src={ImageInfo.maskRecomended} alt="" height={60} />
                  )}
                  {gym.towel === 'required' && (
                    <Image src={ImageInfo.towelRequired} alt="" height={60} />
                  )}
                  {gym.towel === 'recommended' && (
                    <Image src={ImageInfo.towelRecomended} alt="" height={60} />
                  )}
                  {gym.fountain === 'partial' && (
                    <Image src={ImageInfo.fountainPartial} alt="" height={60} />
                  )}
                  {gym.fountain === 'not_allowed' && (
                    <Image src={ImageInfo.fountainBlock} alt="" height={60} />
                  )}
                  {gym.locker_room === 'allowed' && (
                    <Image
                      src={ImageInfo.lockerroomRequired}
                      alt=""
                      height={60}
                    />
                  )}
                  {gym.locker_room === 'closed' && (
                    <Image src={ImageInfo.lockerroomBlock} alt="" height={60} />
                  )}
                  {gym.locker_room === 'not_allowed' && (
                    <Image
                      src={ImageInfo.lockerroomPartial}
                      alt=""
                      height={60}
                    />
                  )}
                </div>
                <div className="grid grid-cols-2 mt-8 gap-y-7">
                  {gym.schedules.map((days, index) => (
                    <div key={index}>
                      <span className="font-bold block">{days.weekdays}</span>
                      <span>{days.hour}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </C.Card>
        ))}
      </C.CardGrid>
    </Container>
  )
}

export default Card
