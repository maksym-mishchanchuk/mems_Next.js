'use client';

import { useState } from 'react';
import { defaultMemes, Meme } from '../lib/memes';
import { Button } from './ui/button';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Row from './Row';
import { useMemeStorage } from '@/lib/utils';

export default function TablePage() {
    const [memes, setMemes] = useMemeStorage(defaultMemes);
    const [editingMeme, setEditingMeme] = useState<Meme | null>(null);

    if (!memes) return null;

    const updateMeme = (updated: Meme) => {
        const updatedMemes = memes.map((meme) =>
            meme.id === updated.id ? updated : meme
        );
        setMemes(updatedMemes);
        setEditingMeme(null);
    };

    return (
        <div className="p-1 sm:p-6">
            <Table>
            <TableHeader>
                    <TableRow className="bg-muted">
                        <TableHead className="text-xs sm:text-sm">ID</TableHead>
                        <TableHead className="text-xs sm:text-sm">Name</TableHead>
                        <TableHead className="text-xs sm:text-sm">Likes</TableHead>
                        <TableHead className="text-xs sm:text-sm">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {memes?.map((meme) => (
                        <Row key={meme.id} meme={meme} editingName={setEditingMeme} />
                    ))}
                </TableBody>
            </Table>

            <Dialog open={!!editingMeme} onOpenChange={() => setEditingMeme(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit mem</DialogTitle>
                    </DialogHeader>

                    {editingMeme && (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                                const imageUrl = (form.elements.namedItem('imageUrl') as HTMLInputElement).value;
                                const likes = parseInt((form.elements.namedItem('likes') as HTMLInputElement).value);

                                updateMeme({ ...editingMeme, title, imageUrl, likes });
                            }}
                            className="grid gap-4"
                        >
                            <div>
                                <Label>ID</Label>
                                <Input value={editingMeme.id} readOnly />
                            </div>
                            <div>
                                <Label>Name</Label>
                                <Input name="title" defaultValue={editingMeme.title} required minLength={3} maxLength={100} />
                            </div>
                            <div>
                                <Label>Image URL</Label>
                                <Input
                                    name="imageUrl"
                                    defaultValue={editingMeme.imageUrl}
                                    type="url"
                                    pattern="https?://.*\.jpg"
                                    required
                                />
                            </div>
                            <div>
                                <Label>Likes</Label>
                                <Input
                                    name="likes"
                                    type="number"
                                    min={0}
                                    max={99}
                                    defaultValue={editingMeme.likes ?? 0}
                                    required
                                />
                            </div>
                            <Button type="submit">Save</Button>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
