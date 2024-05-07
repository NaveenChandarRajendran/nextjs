import React from "react"
import Image from "next/image";
import { DashBoardNavigator } from "./components/DashboardNavigator";

const Welcome = React.lazy(() => {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, 8000, import('./components/greeter'))
  })
})

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Welcome/>
      <DashBoardNavigator />
    </main>
  );
}
