{
    interface ContentInfo {
        url: string
        title: string
        count: number
    }

    let mySite: Record<'top' | 'contact' | 'about', ContentInfo> = {
        top: { url: 'index.php', title: 'top', count: 100 },
        contact: { url: 'contact.php', title: 'contact', count: 105 },
        about: { url: 'about.php', title: 'about', count: 108 }
    }
    console.log(mySite)
}