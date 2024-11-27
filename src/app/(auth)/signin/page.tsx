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
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

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

  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.phoneNumber = "+7" + unformat(values.phoneNumber, maskOptions);

    console.log(user)

    if (user) {
      toast({
        title: "Виктор, вы вошли в аккаунт!",
      });
      router.replace("/");
    }
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
          <Button type="submit">Войти</Button>
        </form>
      </Form>
    </section>
  );
};

export default Page;
