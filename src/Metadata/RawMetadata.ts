import { IRawMetadata, Metadata } from '../Types'

export default class RawMetadata implements IRawMetadata {
    emojis: string[]
    'sticker-pack-id': string
    'sticker-pack-name': string
    'sticker-pack-publisher': string
    constructor(options: Metadata) {
        this['sticker-pack-id'] = options.id
        this['sticker-pack-name'] = options.pack
        this['sticker-pack-publisher'] = options.author
        this.emojis = options.categories
    }
}
