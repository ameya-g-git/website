import clsx from "clsx"
import { useState } from "react"
import { motion } from "framer-motion"

export default function DesignCard({img, title, icon} : {img : string, title : string, icon : string}) {
    const card = { 
        start: {
            opacity: 0, backdropFilter: "", backgroundColor: 'transparent', paddingLeft: "10rem"},
        end: {
            opacity: 1, backdropFilter: "blur(4px)", backgroundColor: "#191919C0", paddingLeft: 0},
    }
    
    const item = {
        start: {opacity: 0},
        end: {opacity: 1}
    }

    return (
        <div className="box-border w-full p-2 border-2 border-white border-opacity-25 rounded-3xl bg-card-black">
            <img src={img} alt={`${title} banner`} className="object-cover w-full h-full rounded-xl" />
            <motion.div 
                initial="start"
                whileHover="end"
                variants={card}
                className="relative inline-flex items-center justify-center w-full h-full gap-2 transition-all ease-out rounded-xl -top-full" >
                <motion.img variants={item} src={icon} alt={`${icon} icon`} className="h-8" />
                <motion.h3 variants={item} className="text-2xl right-full">{title}</motion.h3>
            </motion.div>
        </div>
    )
}