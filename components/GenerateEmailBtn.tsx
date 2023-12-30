"use client";
import { Copy, Wand2 } from "lucide-react";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

export default function GenerateEmailBtn({
  startingText,
}: {
  startingText: string;
}) {
  const [isOpened, setIsOpened] = useState(false);

  const [text, setText] = useState<string>(startingText);

  // Event handler for the onChange event
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // Update the state with the new text content
    setText(event.target.value);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copié!",
        description: "Le texte a été copié dans votre presse-papier.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Le texte n'a pas pu être copié.",
      });
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div>
      <Modal
        title="Message généré:"
        description=""
        isOpen={isOpened}
        onClose={() => {
          setIsOpened(false);
        }}
      >
        <div className="flex flex-col space-y-4">
          <Textarea
            className="h-96"
            value={text}
            onChange={handleTextareaChange}
          />

          <Button className="ml-auto" onClick={copyToClipboard}>
            <Copy className="mr-2 h-4 w-4" />
            Copier
          </Button>
        </div>
      </Modal>
      <Button
        className=""
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <Wand2 className="mr-2 h-4 w-4" /> Générer courriel
      </Button>
    </div>
  );
}
