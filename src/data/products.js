export const products = [
  {
    id: '1',
    name: 'Merino Crew Sweater',
    slug: 'merino-crew-sweater',
    description:
      'Mid-weight merino wool crewneck. Warm enough for winter walks, breathable for indoor wear.',
    priceCents: 12800,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop',
    category: 'Apparel',
  },
  {
    id: '2',
    name: 'Canvas Weekender',
    slug: 'canvas-weekender',
    description:
      '14oz cotton canvas duffel with leather handles and a detachable shoulder strap.',
    priceCents: 18900,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'Bags',
  },
  {
    id: '3',
    name: 'Stoneware Mug Set',
    slug: 'stoneware-mug-set',
    description: 'Set of two hand-glazed mugs. Microwave and dishwasher safe.',
    priceCents: 4200,
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
    category: 'Home',
  },
  {
    id: '4',
    name: 'Japanese Steel Chef Knife',
    slug: 'japanese-steel-chef-knife',
    description:
      '8-inch VG-10 core with 67-layer Damascus cladding. Includes saya cover.',
    priceCents: 16500,
    image:
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=600&fit=crop',
    category: 'Kitchen',
  },
  {
    id: '5',
    name: 'Linen Throw Blanket',
    slug: 'linen-throw-blanket',
    description: 'Pre-washed European linen in a natural oatmeal tone.',
    priceCents: 7900,
    image:
      'https://images.unsplash.com/photo-1634665810235-011d663754e7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
  },
  {
    id: '6',
    name: 'Recycled Wool Beanie',
    slug: 'recycled-wool-beanie',
    description: 'Soft rib knit made from post-consumer wool fiber.',
    priceCents: 3600,
    image:
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop',
    category: 'Apparel',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
