import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function SelectForm({ name, placeholder, list }:{name:string,placeholder:string,list:Array<string>}) {
    return (
        <Select name={name}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select Role</SelectLabel>
                    {list?.map((item) => (
                        <SelectItem value={name === "role" ? item : item?.id}>
                            {name === "role" ? item : item?.name}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>
        </Select>

    )
}

export default SelectForm