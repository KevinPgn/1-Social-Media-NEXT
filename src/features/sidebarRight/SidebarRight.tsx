import { SearchBar } from "./SearchBar"
import { SubscribeYou } from "./SubscribeYou"
import { SuggestionsUsers } from "./SuggestionsUsers"
import { TrendingTags } from "./TrendingTags"

export const SidebarRight = () => {
  return <div className="w-[350px] flex flex-col gap-5 py-3 h-screen sticky top-0">
    <SearchBar />
    <SubscribeYou />
    <SuggestionsUsers />
    <TrendingTags />
  </div>
}