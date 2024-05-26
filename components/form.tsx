"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context" // for type of useRouter

import { Button } from "./ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"

const FormSchema = z.object({
	email: z.string().email({
		message: "please write a valid email address",
	}),
	password: z.string().min(8, {
		message: "password must be at least 8 characters",
	}),
})

export function InputForm() {
	const { toast } = useToast()
	const { router }: AppRouterInstance = useRouter()
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	function onSubmit() {
		if (router && router.push) {
			router.push('/home');
		}
		toast({
			title: "You have completed the form",
			description: "Thank you for submitting the form.",
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 ">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="write your email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="put your password" type="password"  {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
