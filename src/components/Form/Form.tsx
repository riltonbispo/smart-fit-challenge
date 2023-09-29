'use client'
import React, { useRef, useState } from 'react'
import { Container } from '@/styles/utils'
import { selectGym } from '@/services/gymApi'
import iconHour from '@/assets/icon-hour.png'

import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import { useGyms } from '@/contexts/GymContext'
import { GymType } from '@/types/gymType'

type radioForm = {
  radio: 'manha' | 'tarde' | 'noite'
}

const MyForm = () => {
  const gContext = useGyms()
  const [showAllGym, setShowAllGym] = useState(false)

  const { register, handleSubmit, reset } = useForm<radioForm>()

  const onSubmit: SubmitHandler<radioForm> = async (data: radioForm) => {
    let gyms: GymType[] | undefined = []

    gyms = await selectGym(data.radio, showAllGym)

    gyms &&
      gContext?.dispatch({
        type: 'set',
        payload: gyms,
      })

    window.scrollBy({
      top: 400,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <div
        id="results"
        className="border-2 border-gray-300 p-4 rounded text-zinc-500"
      >
        <div className="flex items-center gap-2">
          <Image src={iconHour} height={25} alt=""></Image>
          <span>Horário</span>
        </div>
        <h3 className="border-b-2 border-zinc-300 text-2xl my-4 font-light pl-3">
          Qual período quer treinar?
        </h3>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <label
            htmlFor="manha"
            className="border-b-2 border-zinc-300 flex justify-between py-2"
          >
            <div>
              <input
                {...register('radio')}
                id="manha"
                type="radio"
                value="manha"
              />
              <span className="ml-2">Manha</span>
            </div>
            <span className="">06:00 às 12:00</span>
          </label>

          <label
            htmlFor="tarde"
            className="border-b-2 border-zinc-300 flex justify-between py-2"
          >
            <div>
              <input
                {...register('radio')}
                id="tarde"
                type="radio"
                value="tarde"
              />
              <span className="ml-2">Tarde</span>
            </div>
            <span className="">12:01 às 18:00</span>
          </label>

          <label
            htmlFor="noite"
            className="border-b-2 border-zinc-300 flex justify-between py-2"
          >
            <div>
              <input
                {...register('radio')}
                id="noite"
                type="radio"
                value="noite"
              />
              <span className="ml-2">Noite</span>
            </div>
            <span className="">18:01 às 23:00</span>
          </label>

          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between mt-6">
            <label htmlFor="showAllGym" className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showAllGym"
                {...register}
                onChange={() => setShowAllGym((prev) => !prev)}
              />
              <span>Exibir unidades fechadas</span>
            </label>
            <p>
              resultados encontrados{' '}
              <span className="font-bold text-zinc-800">
                {gContext?.gyms.length}
              </span>
            </p>
          </div>

          <div className="flex flex-col md:mx-auto md:flex-row  gap-4 mt-6">
            <Button variant="primary" value="econtrar unidade" type="submit" />
            <Button
              variant="secondary"
              type="reset"
              value="limpar"
              onClick={() => {
                gContext?.dispatch({
                  type: 'set',
                  payload: [],
                })
                reset()
              }}
            />
          </div>
        </form>
      </div>
    </Container>
  )
}

export default MyForm
