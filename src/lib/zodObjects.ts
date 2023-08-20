import { z } from 'zod'

import { PoolType } from '@/constants/enums'

export const ID = z.object({
  id: z.string(),
})

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().min(6),
})

const AddressSchema = z.object({
  address: z.string(),
  zip: z.string(),
  state: z.string(),
  city: z.string(),
})

const ContactSchema = z.object({
  phone1: z.string(),
  phone2: z.string().optional(),
  email1: z.string().email(),
  email2: z.string().email().optional(),
})

export const ClientSchema = UserSchema.extend({
  userOwnerId: z.string(),
  isActive: z.boolean().optional().default(true),
  // : pools   Pools N-> 1 Client
  deactivatedAt: z.date().optional().default(new Date()),
})
  .omit({ email: true, password: true })
  .merge(AddressSchema)
  .merge(ContactSchema)

export const PoolSchema = z
  .object({
    isActive: z.boolean().optional().default(true),
    name: z.string(),
    userOwnerId: z.string(),
    clientOwnerId: z.string(),
    animalDanger: z.boolean().default(false).optional(),
    lockerCode: z.string().optional(),
    poolType: z.enum([PoolType.CHLORINE, PoolType.SALT, PoolType.OTHER]),
    enterSide: z.string(),
    photos: z.array(z.string()).max(4).optional(),
    deactivatedAt: z.date().optional().default(new Date()),
  })
  .merge(AddressSchema)

export const ServiceSchema = z.object({
  poolId: z.string(),
  doneByUser: z.string(),
  photo: z.array(z.string()),
  chlorine: z.number(),
  ph: z.number(),
  alkalinity: z.number(),
  cyanAcid: z.number(),
  chlorineSpent: z.number(),
  tabletSpent: z.number(),
  shockSpent: z.number(),
  phosphateSpent: z.number(),
})
