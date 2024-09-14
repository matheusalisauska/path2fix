"use client"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

type Props = {
    fieldTitle: string,
    nameInSchema: string,
    placeholder?: string,
    labelLeft?: boolean,
    readOnly?: boolean,
}

export function InputWithLabel({ fieldTitle, nameInSchema, placeholder, labelLeft, readOnly }: Props) {
    const form = useFormContext()

    const fieldTitleNoSpaces = fieldTitle.replaceAll(' ', '-')

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem className={labelLeft ? "w-full flex flex-col items-center gap-2" : ""}>
                    <FormLabel className={`text-base ${labelLeft ? "w-1/3 mt-2" : ""}`} htmlFor={fieldTitleNoSpaces}>
                        {fieldTitle}
                    </FormLabel>
                    <div className={`flex items-center gap-2 ${labelLeft ? "w-2/3" : "w-fulL"}`}>
                        <div className="w-full flex items-center">
                            <FormControl>
                                <Input
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