import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
	const { gifs, handleTermClicked, handleSearch, previousTerms } = useGifs();

	return (
		<>
			{/*Header*/}
			<CustomHeader title="Gifs App" description="Busca tus gifs favoritos" />

			{/*Buscador de Gifs*/}
			<SearchBar
				onQuery={(query: string) => handleSearch(query)}
				placeholder="Busca lo que quieras"
			/>

			{/* Busquedas previas */}
			<PreviousSearches
				onLabelClicked={handleTermClicked}
				searches={previousTerms}
			/>

			{/* Gifs */}
			<GifsList gifs={gifs} />
		</>
	);
};
