"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { unformat, useMask } from "@react-input/mask";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/stores/use-auth-store";
import { toast } from "sonner";
import Link from "next/link";
import { AxiosError } from "axios";

// const phoneValidation = new RegExp(
//   /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
// );

const formSchema = z.object({
  phoneNumber: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  password: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
});

const maskOptions = {
  mask: "+7 (___) ___-__-__",
  replacement: { _: /\d/ },
};

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const inputRef = useMask(maskOptions);

  const { push } = useRouter();

  const setUser = useAuthStore((state) => state.setUser);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: z.infer<typeof formSchema>) =>
      authService.main("login", data),
    onSuccess(response) {
      setUser(response.data.user);
      setAuthentication(true);
      toast("Вы вошли в аккаунт!");
      push("/");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === "Invalid password") {
          toast("Неверный пароль");
        } else if (error.response?.data.message === "User not found") {
          toast("Пользователя с таким номером не существует");
        } else {
          toast("Попробуйте позже");
        }
      }
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    data.phoneNumber = "+7" + unformat(data.phoneNumber, maskOptions);
    mutate(data);
  }

  return (
    <section className="h-full md:w-1/2 w-full bg-background flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-6 items-center w-[70%]">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <h1 className="text-2xl font-semibold">Shop</h1>
        </div>
        <Separator />
        <h1 className="text-2xl font-semibold">Вход в аккаунт</h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[70%]"
        >
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+7"
                    {...field}
                    ref={inputRef}
                  />
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
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Link className="text-primary hover:underline" href="/signup">
              Нет аккаунта? Регистрация
            </Link>
          </div>
          <Button type="submit">Войти</Button>
        </form>
      </Form>
    </section>
  );
};

export default Page;
