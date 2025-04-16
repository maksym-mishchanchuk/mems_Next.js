'use client';

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Meme } from "@/lib/memes";

type RowProps = {
    meme: Meme;
    editingName: (meme: Meme) => void;
};

export default function Row({ meme, editingName }: RowProps) {
    return (
        <TableRow>
            <TableCell className="text-xs sm:text-sm">{meme.id}</TableCell>
            <TableCell className="text-xs sm:text-sm">{meme.title}</TableCell>
            <TableCell className="text-xs sm:text-sm">{meme.likes}</TableCell>
            <TableCell>
                <Button className="text-xs sm:text-sm" onClick={() => editingName(meme)}>Edit</Button>
            </TableCell>
        </TableRow>
    );
}
