import { Button, Card, Alert } from "flowbite-react";

export default function Home() {
  return (
    <div className="min-h-dvh grid place-items-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-4">
        <Alert color="info">Flowbite Tailwind v4 </Alert>
        <Card>
          <h2 className="text-xl font-semibold">Primeiro Layout</h2>
          <p className="text-sm text-gray-600">
            Componentes prontos
          </p>
          <div className="flex gap-2">
            <Button>Primário</Button>
            <Button color="gray">Secundário</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
