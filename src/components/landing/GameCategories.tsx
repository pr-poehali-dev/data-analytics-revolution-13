import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const categories = [
  {
    id: "currency",
    name: "Игровая валюта",
    emoji: "💰",
    description: "Монеты, кристаллы, токены",
    count: "12 000+ лотов",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "hover:border-yellow-500/40",
    tag: "Популярное",
    tagColor: "bg-yellow-500/20 text-yellow-400",
    icon: "Coins",
  },
  {
    id: "accounts",
    name: "Аккаунты",
    emoji: "🎮",
    description: "Прокачанные персонажи и профили",
    count: "8 500+ лотов",
    color: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
    tag: "Хит",
    tagColor: "bg-violet-500/20 text-violet-400",
    icon: "UserCheck",
  },
  {
    id: "skins",
    name: "Скины и предметы",
    emoji: "🗡️",
    description: "Редкие скины, оружие, артефакты",
    count: "25 000+ лотов",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-500/40",
    tag: "Топ",
    tagColor: "bg-cyan-500/20 text-cyan-400",
    icon: "Sparkles",
  },
  {
    id: "boost",
    name: "Буст рейтинга",
    emoji: "🚀",
    description: "Быстрый подъём ранга и рейтинга",
    count: "3 200+ услуг",
    color: "from-green-500/20 to-emerald-500/10",
    border: "hover:border-green-500/40",
    tag: "Быстро",
    tagColor: "bg-green-500/20 text-green-400",
    icon: "TrendingUp",
  },
  {
    id: "coaching",
    name: "Тренировки",
    emoji: "🏆",
    description: "Обучение от про-игроков",
    count: "900+ тренеров",
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/40",
    tag: "Эксперты",
    tagColor: "bg-pink-500/20 text-pink-400",
    icon: "GraduationCap",
  },
  {
    id: "items",
    name: "Лутбоксы",
    emoji: "📦",
    description: "Кейсы, наборы и бандлы",
    count: "5 700+ лотов",
    color: "from-orange-500/20 to-red-500/10",
    border: "hover:border-orange-500/40",
    tag: "Удача",
    tagColor: "bg-orange-500/20 text-orange-400",
    icon: "Gift",
  },
]

const popularGames = [
  "Dota 2", "CS2", "World of Warcraft", "Fortnite",
  "PUBG", "Valorant", "League of Legends", "GTA Online",
  "Minecraft", "Roblox", "Rust", "Apex Legends",
]

export default function GameCategories() {
  return (
    <section id="artists" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Категории товаров
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Всё что нужно для игры — в одном месте. Тысячи лотов от проверенных продавцов.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${cat.color} border border-gray-800 ${cat.border} rounded-2xl p-6 cursor-pointer transition-all duration-300 group overflow-hidden`}
            >
              {/* Tag */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${cat.tagColor}`}>
                {cat.tag}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{cat.count}</span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 15 }}
                  >
                    <Icon name="ArrowRight" size={14} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Games Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-2xl p-8 bg-gray-900/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Gamepad2" size={20} className="text-violet-400" />
            <h3 className="text-lg font-semibold text-white">Популярные игры</h3>
            <span className="ml-auto text-sm text-gray-500">500+ игр в каталоге</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {popularGames.map((game, index) => (
              <motion.button
                key={game}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 bg-gray-800/60 hover:bg-violet-500/20 border border-gray-700 hover:border-violet-500/50 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-200"
              >
                {game}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-violet-500/20 border border-violet-500/40 rounded-full text-sm text-violet-400 hover:text-violet-300 transition-all duration-200"
            >
              + ещё 488 игр
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
