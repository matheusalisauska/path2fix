"use client"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { Textarea } from "./textarea"

type Props = {
    fieldTitle: string,
    nameInSchema: string,
    placeholder?: string,
    labelLeft?: boolean,
    readOnly?: boolean,
}

export function TextAreaWithLabel({ fieldTitle, nameInSchema, placeholder, labelLeft, readOnly }: Props) {
    const form = useFormContext()

    const fieldTitleNoSpaces = fieldTitle.replaceAll(' ', '-')

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem className={labelLeft ? "w-full flex flex-col items-center gap-2" : ""}>
                    <FormLabel className={`text-sm text-[#666666] ${labelLeft ? "w-1/3 mt-2" : ""}`} htmlFor={fieldTitleNoSpaces}>
                        {fieldTitle}
                    </FormLabel>
                    <div className={`flex items-center gap-2 ${labelLeft ? "w-2/3" : "w-full"}`}>
                        <div className="w-full flex items-center">
                            <FormControl>
                                <Textarea
                                    {...field}
                                    id={fieldTitleNoSpaces}
                                    className="w-full"
                                    placeholder={placeholder}
                                    readOnly={readOnly}
                                    disabled={readOnly}
                                    value={field.value}
                                    onChange={e => field.onChange(e.target.value)}
                                />
                            </FormControl>
                        </div>
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}