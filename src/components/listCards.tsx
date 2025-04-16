'use client';

import { defaultMemes } from "@/lib/memes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemeStorage } from '@/lib/utils';
import Image from 'next/image';

export default function ListCards() {
    const [memes] = useMemeStorage(defaultMemes);

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {memes?.map((meme) => (
                    <Card key={meme.id}
                          className="flex flex-col transition-transform duration-200 ease-in-out hover:scale-105"
                    >
                        <CardHeader>
                            <CardTitle>{meme.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <Image
                                src={meme.imageUrl}
                                alt={meme.title}
                                className="w-full h-70 object-cover rounded"
                            />
                            <p className="text-sm text-muted-foreground">Likes: {meme.likes}</p>
                            <a href={meme.link} target="_blank" className="text-blue-500 underline text-sm">
                                Go to mem
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
