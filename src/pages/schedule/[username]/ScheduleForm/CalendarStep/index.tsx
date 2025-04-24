import { useEffect, useState } from "react";
import { Calendar } from "../../../../../components/calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";
import dayjs from "dayjs";
import { api } from "../../../../../lib/axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";


interface Availability {
    possibleTimes: number[]
    availableTimes: number[];
}

export function CalendarStep() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null)


    const router = useRouter()
    const username = String(router.query.username)


    const isDateSelected = !!selectedDate

    const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
    const describleDate = selectedDate ? dayjs(selectedDate).format('DD[ de ] MMMM') : null

    const selectedDateWithoutTime = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null

    const { data: availability } = useQuery<Availability>({
        queryKey : ['availability', selectedDateWithoutTime],
        queryFn : async () => {
            const response = await api.get(`/users/${username}/availability`, {
              params: {
                date: selectedDateWithoutTime,
              },
            })
      
            return response.data
          },
          enabled: !!selectedDate
    })

    // useEffect(() => {
    //     if (!selectedDate) {
    //         return
    //     }

    //     api.get(`/users/${username}/availability`, {
    //         params: {
    //             date: 
    //         }
    //     }).then(response => { setAvailability(response.data) })
    // }, [selectedDate])

    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

            {isDateSelected && <TimePicker>
                <TimePickerHeader>
                    {weekDay}, <span>{describleDate}</span>
                </TimePickerHeader>
                <TimePickerList>
                    {availability?.possibleTimes.map(hour => {
                        return (
                            <TimePickerItem
                                key={hour}
                                disabled={!availability.availableTimes.includes(hour)}>
                                {String(hour).padStart(2, '0')}:00h
                            </TimePickerItem>
                        )
                    })}
                </TimePickerList>
            </TimePicker>}
        </Container>
    )
}