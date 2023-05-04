import DTable from './DTable'
import { useFetch } from '../../hookd/useFetch'
import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { Slider, Box, SliderThumb, SliderFilledTrack, SliderTrack, Text, Heading } from '@chakra-ui/react';
export default function Daily() {
    // const [selectedDate, setSelectedDate] = useState(new Date().setDate(new Date().getDate() - 5));
    const [prev, setPrev] = useState(5)
    // let info = []
    const handleSliderChange = (value) => {
        // const newDate = new Date();
        // newDate.setDate(newDate.getDate() - value);
        // setSelectedDate(newDate);
        setPrev(value)
        console.log(value)
        // console.log(date.toDateString())
    };

    let info = []
    // let date = new Date(dat)
    // while (date && date < new Date()) {
    //     date.setDate(date.getDate() + 1);
    //     console.log(date.toDateString())
    //     let { data } = useFetch("http://localhost:5001/news/" + date.toISOString().slice(0, 10))
    //     data && data.title.length && info.push(data)
    // }


    // useEffect(() => {
    //     let date = new Date(selectedDate)
    //     while (date < new Date()) {
    //         date.setDate(date.getDate() + 1);
    //         console.log(date.toDateString())
    // let { data } = useFetch("http://localhost:5001/news/" + date.toISOString().slice(0, 10))
    // data && data.title.length && info.push(data)
    // console.log(data)
    // }
    // }, [selectedDate])

    let date = new Date()
    for (let i = 0; i < 70; i++) {
        date.setDate(date.getDate() - 1);
        // console.log(date.toDateString())
        let { data } = useFetch("http://localhost:5001/news/" + date.toISOString().slice(0, 10))
        data && data.title.length && info.push(data)
    }

    // console.log(info)
    return (
        <div>
            <Heading size={"md"}> Past {prev} days</Heading>
            <Slider min={0}
                max={30}
                step={1}
                defaultValue={5}
                onChange={handleSliderChange}
                aria-label="slider-ex-1">
                <SliderTrack bg='red.100'>
                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Box color='tomato' />
                </SliderThumb>
            </Slider>
            {<DTable info={info} prev={prev} />}
            {/* {info.length && <DTable info={info} dat={selectedDate} />} */}
        </div>
    )
}
