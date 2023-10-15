"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="max-w-lg space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>
      </div>
    </section>
  );
};
export default NewIssuePage;
