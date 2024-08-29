import React from "react"
import CardList from '#widgets/card-list';
import FilterBar from "#widgets/filter-bar";

const  HomePage: React.FC = () => {
  return (
    <main className="w-full h-fit min-h-screen p-16 flex flex-col items-center gap-16 bg-slate-50">
        <FilterBar />
        <CardList />
    </main>
  )
}

export default HomePage