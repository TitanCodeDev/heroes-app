import { Route, Routes } from "react-router-dom"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { DCScreen } from "../components/dc/DCScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { Navbar } from "../components/ui/NavBar"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    {/* se coloca "/:heroeId" para especificarle al router que lo siguiente 
                        es un argumento y es obligatorio 
                    */}
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
