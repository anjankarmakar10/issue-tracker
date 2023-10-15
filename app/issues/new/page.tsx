"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();

  const { handleSubmit, register, control } = useForm<IssueForm>();

  const submitForm = async (data: FormData) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <section className="max-w-7xl mx-auto p-4">
      <form onSubmit={handleSubmit(submitForm)} className="max-w-lg space-y-3">
        <TextField.Root>
          <TextField.Input {...register("title")} placeholder="Title" />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit New Issue</Button>
      </form>
    </section>
  );
};
export default NewIssuePage;
