// Link to an Everipedia page
// The interface is listed here for documentation, but the 
// links are actually marked up inline in sentence text with 
// the format: 
// [[ LINK|${lang_code}|${slug}|${text} ]]
export interface WikiLink {
    index?: number;
    lang_code: string;
    slug: string;
    text: string; // the link's display text
}

export interface Sentence {
    type: string; // sentence | inline_image | fixed_image
    index: number;
    text: string; // contains inline WikiLink markup + some light markdown for formatting
}

export interface Paragraph {
    index: number;
    items: Sentence[];
    tag_type: string;
    attrs: { string : string };
}

export interface Section {
    paragraphs: Paragraph[];
    images: Media[];
}

export interface Infobox {}

export interface Media {
    type: string;
    url: string;
    thumb: string;
    caption: Sentence[];
    timestamp?: Date;
    attribution_url?: string;
    mime?: string;
    link_id?: number;
}

export interface Metadata {
    link_count?: number;
    page_lang?: string;
    page_type?: string;
    is_removed?: boolean;
    is_adult_content?: boolean;
    creation_timestamp?: Date;
    last_modified?: Date;
    pageviews?: number;
    url_slug?: string;
    url_slug_alternate?: string;
    sub_page_type?: string;
    is_wikipedia_import?: boolean;
    is_indexed?: boolean;
    bing_index_override?: boolean;
    is_locked?: boolean;
}

export interface AmpInfo {
    load_youtube_js: boolean;
    load_audio_js: boolean;
    load_video_js: boolean;
    lightboxes: any[];
}

export interface Citation {
    url: string;
    thumb: string;
    description: string;
    category: string;
    citation_id: number;
    social_type: string;
    attribution: string;
    timestamp: Date;
    mime: string;
    in_blurb?: boolean;
}

export interface Table {
    type: string;
    caption: string;
    thead?: TableRow[];
    tbody: TableRow[];
    tfoot?: TableRow[];
}

export interface TableRow {
    index: number;
    attrs: { string: string };
    cells: TableCell[];
}

export interface TableCell {
    index: number;
    attrs: { string: string };
    tag_type: string;
    content: Sentence[];
}

export interface ArticleJson {
    page_title: string;
    main_photo: Media;
    infobox_html: string;
    page_body: Section[];
    infoboxes: Infobox[];
    citations: Citation[];
    media_gallery: Media[];
    metadata: Metadata;
    amp_info: AmpInfo;

    categories?: string[];
    type?: string;
}